import java.util.Random;
import java.util.Scanner;

public class soal23 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        char lanjut = 'y';
        while (lanjut == 'y' || lanjut == 'Y') {
            
            int bilangan1 = random.nextInt(10) + 1;
            int bilangan2 = random.nextInt(10) + 1;
            char operator = generateOperator();

            
            System.out.print(bilangan1 + " " + operator + " " + bilangan2 + " = ");

            
            int jawabanPengguna = scanner.nextInt();

            
            int jawabanBenar = hitung(bilangan1, bilangan2, operator);

            
            if (jawabanPengguna == jawabanBenar) {
                System.out.println("Jawaban Anda benar!");
            } else {
                System.out.println("Jawaban Anda salah. Jawaban yang benar adalah: " + jawabanBenar);
            }

            
            System.out.print("Ingin melanjutkan? (y/n): ");
            lanjut = scanner.next().charAt(0);
        }

        System.out.println("Terima kasih telah bermain!");
    }

    //  operator  acak
    private static char generateOperator() {
        Random random = new Random();
        int operatorInt = random.nextInt(3);
        if (operatorInt == 0) {
            return '*';
        } else if (operatorInt == 1) {
            return '/';
        } else {
            return '%';
        }
    }

    //  menghitung hasil operasi
    private static int hitung(int bilangan1, int bilangan2, char operator) {
        switch (operator) {
            case '*':
                return bilangan1 * bilangan2;
            case '/':
                return bilangan1 / bilangan2;
            case '%':
                return bilangan1 % bilangan2;
            default:
                return 0;
        }
    
}}
    

