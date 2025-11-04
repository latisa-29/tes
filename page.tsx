"use client";

import { useState, useMemo } from "react";

// Helper function untuk mendapatkan warna status dan simbol
const getStatusStyle = (status: string) => {
  switch (status) {
    case "Hadir":
      return { className: "text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full inline-block", symbol: "✅" };
    case "Izin":
      return { className: "text-yellow-700 font-medium bg-yellow-50 px-2 py-0.5 rounded-full inline-block", symbol: "📝" };
    case "Sakit":
      return { className: "text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full inline-block", symbol: "🤒" };
    case "Alpha":
      return { className: "text-red-600 font-medium bg-red-50 px-2 py-0.5 rounded-full inline-block", symbol: "❌" };
    default:
      return { className: "text-gray-500", symbol: "" };
  }
};

interface PresensiData {
  nama: string;
  kelas: string;
  status: string;
  keterangan: string;
  
}

const availableClasses = ["XI RPL", "XI TKJ", "XI PG"];

export default function AbsensiPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState<PresensiData>({
    nama: "",
    kelas: "",
    status: "",
    keterangan: "",
  });
  // Mengosongkan data inisialisasi agar tabel tidak ada baris kosong
  const [dataPresensi, setDataPresensi] = useState<PresensiData[]>([]);
  const [selectedClass, setSelectedClass] = useState("Semua Kelas");

  // Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogin(true);
  };

  // Input Form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.status) {
        alert("⚠️ Mohon pilih status kehadiran.");
        return;
    }
    setDataPresensi([formData, ...dataPresensi]); // Tambahkan data baru di atas
    setFormData({ nama: "", kelas: "", status: "", keterangan: "", }); // Reset Nomor Absen
    alert("✅ Sukses! Data presensi telah disimpan.");
  };

  // Hitung kehadiran
  const total = dataPresensi.length;
  const hadir = dataPresensi.filter((d) => d.status === "Hadir").length;
  const izin = dataPresensi.filter((d) => d.status === "Izin").length;
  const sakit = dataPresensi.filter((d) => d.status === "Sakit").length;
  const alpha = dataPresensi.filter((d) => d.status === "Alpha").length;
  const persentase = total > 0 ? ((hadir / total) * 100).toFixed(1) : 0;

  // Logika Filter Data
  const filteredData = useMemo(() => {
    if (selectedClass === "Semua Kelas") {
      return dataPresensi;
    }
    return dataPresensi.filter(data => data.kelas === selectedClass);
  }, [dataPresensi, selectedClass]);

  // Jika belum login (Menggunakan desain yang lebih menarik)
  if (!isLogin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 flex items-center justify-center gap-2">
            🔑 Masuk Absensi
          </h2>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔒</span>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Masuk
          </button>
        </form>
      </div>
    );
  }

  // Jika sudah login
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700">
        📝 Sistem Absensi Siswa
      </h1>

      {/* Statistik & Persentase Kehadiran */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 text-center col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-2 text-gray-700 flex items-center justify-center">
            📊 Persentase Kehadiran
          </h2>
          <p className="text-5xl font-extrabold text-green-600 mt-4">{persentase}%</p>
        </div>
        
        {/* Total Data */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-700">Jumlah Data</h2>
            <p className="text-5xl font-extrabold text-indigo-600 mt-4">{total}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Form Presensi */}
        <div className="lg:col-span-1">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg lg:sticky lg:top-8"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center gap-2">
                ✍️ Form Presensi
                </h2>
                
                
                <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-600">Nama Lengkap</label>
                <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    required
                />
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-600">Kelas</label>
                <div className="relative">
                    <select
                        name="kelas"
                        value={formData.kelas}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none bg-white pr-8"
                        required
                    >
                        <option value="">Pilih Kelas</option>
                        {availableClasses.map((kelas) => (
                            <option key={kelas}>{kelas}</option>
                        ))}
                    </select>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">▼</span>
                </div>
                </div>

                <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-600">
                    Status Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    {["Hadir", "Izin", "Sakit", "Alpha"].map((status) => {
                        const { symbol } = getStatusStyle(status);
                        return (
                            <label key={status} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${formData.status === status ? 'border-indigo-500 ring-2 ring-indigo-200 bg-indigo-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                                <input
                                    type="radio"
                                    name="status"
                                    value={status}
                                    checked={formData.status === status}
                                    onChange={handleChange}
                                    className="text-indigo-600 focus:ring-indigo-500"
                                    required
                                />
                                <span className="font-medium text-gray-700 flex items-center">{symbol} {status}</span>
                            </label>
                        );
                    })}
                </div>
                </div>

                <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-gray-600">Keterangan</label>
                <textarea
                    name="keterangan"
                    value={formData.keterangan}
                    onChange={handleChange}
                    placeholder="Tulis keterangan tambahan (jika ada)"
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 transition"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                💾 Simpan Presensi
                </button>
            </form>
        </div>

        {/* Tabel Presensi & Rekap Bulanan */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Rekap Bulanan */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 flex items-center gap-2">
                    📈 Rekap Kehadiran
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-green-100 rounded-lg hover:shadow-md transition">
                        <p className="font-bold text-green-700 flex items-center justify-center">✅ Hadir</p>
                        <p className="text-2xl font-extrabold text-gray-800 mt-1">{hadir}</p>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-lg hover:shadow-md transition">
                        <p className="font-bold text-yellow-700 flex items-center justify-center">📝 Izin</p>
                        <p className="text-2xl font-extrabold text-gray-800 mt-1">{izin}</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded-lg hover:shadow-md transition">
                        <p className="font-bold text-blue-700 flex items-center justify-center">🤒 Sakit</p>
                        <p className="text-2xl font-extrabold text-gray-800 mt-1">{sakit}</p>
                    </div>
                    <div className="p-4 bg-red-100 rounded-lg hover:shadow-md transition">
                        <p className="font-bold text-red-700 flex items-center justify-center">❌ Alpha</p>
                        <p className="text-2xl font-extrabold text-gray-800 mt-1">{alpha}</p>
                    </div>
                </div>
            </div>

            {/* Tabel Presensi */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 flex items-center gap-2">
                    📋 Data Presensi Hari Ini
                </h2>
                
                {/* FILTER KELAS */}
                <div className="mb-4 flex items-center gap-3">
                    <label className="text-sm font-medium text-gray-600">Filter Kelas:</label>
                    <div className="relative w-48">
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none bg-white pr-8 text-sm"
                        >
                            <option value="Semua Kelas">Semua Kelas ({dataPresensi.length})</option>
                            {availableClasses.map((kelas) => {
                                const count = dataPresensi.filter(d => d.kelas === kelas).length;
                                return (
                                    <option key={kelas} value={kelas}>
                                        {kelas} ({count})
                                    </option>
                                );
                            })}
                        </select>
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">▼</span>
                    </div>
                    <p className="text-sm text-gray-500 italic">Ditampilkan: {filteredData.length} data</p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-indigo-600 text-white text-left">
                                <th className="px-4 py-3 border-r border-indigo-700">No</th>
                                <th className="px-4 py-3 border-r border-indigo-700">No. Absen</th> {/* <-- Kolom Baru */}
                                <th className="px-4 py-3 border-r border-indigo-700">Nama</th>
                                <th className="px-4 py-3 border-r border-indigo-700">Kelas</th>
                                <th className="px-4 py-3 border-r border-indigo-700">Status</th>
                                <th className="px-4 py-3">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((row, i) => {
                                    const { className, symbol } = getStatusStyle(row.status);
                                    return (
                                        <tr key={i} className={`hover:bg-gray-50 border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-4 py-3 text-gray-700">{i + 1}</td>
                                            <td className="px-4 py-3 font-medium text-gray-800">{row.nama}</td>
                                            <td className="px-4 py-3 text-gray-700">{row.kelas}</td>
                                            <td className="px-4 py-3">
                                                <span className={className}>
                                                    {symbol} {row.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 italic">
                                                {row.keterangan || "-"}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-6 text-gray-500 italic">Tidak ada data presensi untuk kelas **{selectedClass}**.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}