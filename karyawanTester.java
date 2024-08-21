//Driver Class
public class karyawanTester {
    public static void main(String[] args) {
    //object
    //Class object = new constructor
    karyawan tia = new karyawan(123, "tia", "tu", "malang");
    karyawan alex = new karyawan(87, "alex", "bk", "surabaya");
    karyawan rudi = new karyawan(9, "alex", "kesiswaan", "kediri");
    karyawan surya = new karyawan(7, "surya", "kurikulum", "jember");
    karyawan bunga = new karyawan(2, "bunga", "sapras", "banyuwangi");

    tia.print();
    alex.print();
    rudi.print();
    surya.print();
    bunga.print();
    }
}
