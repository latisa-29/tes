import java.util.Scanner;

public class seleksiPrakerin {
    public static void main(String[] args) {
         String nama, kelas, perilaku;
        int nilai;

        Scanner s = new Scanner(System.in);
        System.out.print("nama: ");
        nama = s.nextLine();
        System.out.println("kelas (X/XI/XII)");
        kelas = s.next();

        if (kelas.equalsIgnoreCase(" XII")) {
            System.out.println("perilaku siswa (baik/cukup)");
            perilaku = s.next();
        if (kelas.equalsIgnoreCase("baik")) {
            System.out.println("nilai siswa ");
            nilai = s.nextInt();
        if (nilai >=85) {
            System.out.println(nama = "dinyatakan lulus mengikuti prakerin");
            
        } else {
            System.out.println("maaf anda gagal karna nilai");
        }
            
        } else {
            System.out.println("maaf anda gagal karna perilaku");
        }
            
        } else {
            System.out.println("maaf anda gagal karna bukan kelas XII");
        }

    }
    
}
