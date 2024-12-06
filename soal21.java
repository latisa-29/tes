import java.util.Scanner;

public class soal21 {
    public static void main(String[] args) {
        Scanner  s = new Scanner(System.in);
        System.out.println("Masukkan bilangan yang bernilai positif: ");
        int bilangan = s.nextInt();

        if (bilangan <0) {
            System.out.println("Bilangan harus bernilai positif!");
        }else{
        long faktorial = 1;
        for (int i = 1; i <= bilangan; i++) {
            faktorial*=i;
        }
        System.out.println("Faktorial dari "+bilangan+ " Adalah: "+faktorial);
        }
         
    }
    
}
