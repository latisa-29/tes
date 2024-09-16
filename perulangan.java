import java.util.Scanner;

public class perulangan {
    public static void main(String[] args) {
         int NilaiSiswa=0, JumlahSiswa;
        Scanner s = new Scanner (System.in);
        System.out.println("Masukkan Jumlah Siswa ");
        JumlahSiswa = s.nextInt();

        int TotalNilai=0;

        for (int i = 1; i <=JumlahSiswa; i++) {
            System.out.println("Massukan Nilai Siswa " + i+": ");
            NilaiSiswa = s.nextInt();
            TotalNilai+=NilaiSiswa;
            
        }

        double ratarata = TotalNilai / JumlahSiswa;
        System.out.println("total nilai : "+TotalNilai);
        System.out.println(" rata-rata :"+ratarata);

    }
    
}
    

