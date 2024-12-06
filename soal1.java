import java.util.Scanner;

public class soal1 {
    public static void main(String[] args) {
        Scanner s = new Scanner (System.in);
        // Input data dari pengguna
        System.out.print("Masukkan berat paket (kg): ");
        double berat = s.nextDouble();

        System.out.print("Masukkan jarak tempuh (km): ");
        double jarak = s.nextDouble();

        System.out.print("Masukkan panjang paket (cm): ");
        double panjang = s.nextDouble();

        System.out.print("Masukkan lebar paket (cm): ");
        double lebar = s.nextDouble();

        System.out.print("Masukkan tinggi paket (cm): ");
        double tinggi = s.nextDouble();

        // Hitung volume paket
        double volume = panjang * lebar * tinggi;

        // Hitung biaya berdasarkan jarak
        double biayaJarak;
        if (jarak <= 10) {
            biayaJarak = berat * 4250;
        } else {
            biayaJarak = berat * 6000;
        }

        // Hitung biaya tambahan untuk volume
        double biayaVolume = 0;
        if (volume > 100) {
            biayaVolume = 50000;
        }

        // Hitung total biaya
        double totalBiaya = biayaJarak + biayaVolume;

        // Tampilkan hasil
        System.out.println("Total biaya pengiriman: Rp " + totalBiaya);
    }
    }
    
