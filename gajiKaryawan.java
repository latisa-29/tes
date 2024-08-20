import java.util.Scanner;

public class gajiKaryawan {
    
    public static void main(String[] args) {
     
       double jamKerja, tarifKerja, pajak, gajiKaryawan;

        Scanner input = new Scanner(System.in);
        System.out.println("masukkan jam kerja: ");
        jamKerja = input.nextDouble();
        System.out.println("masukkan tarif kerja: ");
        tarifKerja = input.nextDouble();
        System.out.println("masukkan pajak: ");
        pajak = input.nextDouble();

        gajiKaryawan=jamKerja*tarifKerja;
        pajak=(pajak/100)*gajiKaryawan;
        System.out.println("gajiKaryawan :"+gajiKaryawan);
    }
    
}
