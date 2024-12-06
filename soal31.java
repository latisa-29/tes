import java.util.Scanner;

public class soal31 {
    public static void main(String[] args) {
        int NilaiSiswa,  jumlahsiswa;
        Scanner s = new Scanner (System.in);
        System.out.println("Masukkan jumlah siswa");
        jumlahsiswa = s.nextInt();

        double totalnilai=0;
        for (int i = 1; i <=jumlahsiswa; i++) {
            System.out.println("Masukkan nilai siswa "+i+" :");
            NilaiSiswa = s.nextInt();
            totalnilai+=NilaiSiswa;
            
        }

        
        double ratarata = totalnilai / jumlahsiswa;
        System.out.println("Total nilai :"+totalnilai);
        System.out.println("rata rata :"+ratarata);
        s.close();
    }
}

    
    
