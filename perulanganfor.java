package perulangan;

import java.util.Scanner;

public class perulanganfor {
    public static void main(String[] args) {
        int nilaiAwal, nilaiAkhir;
        Scanner s = new Scanner(System.in);
        System.out.println("Masukkan nilai awal");
        nilaiAwal = s.nextInt();
        System.out.println("Masukkan nilai akhir");
        nilaiAkhir = s.nextInt();
        for (int index = nilaiAkhir; index >=nilaiAwal; index--) {
            System.out.println(index);
            
        }
    }
    
}
