//Driver Class

import java.util.Scanner;

public class karyawanTester {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("inputkan nama karyawan");
        String nama = input.nextLine();
        System.out.println("inputkan unit karyawan ");
        String unit = input.nextLine();
        System.out.println("masukkan alamat karyawan");
        String alamat = input.nextLine();
        System.out.println("inputkan id karyawan");
        int id = input.nextInt();

        // object
        // Class object = new constructor
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
        input.close();
    }
}
