import java.util.HashMap;
import java.util.Scanner;

public class funcition33 {
    public static void hitungFrekuensi(int[] array) {
        HashMap<Integer, Integer> frekuensi = new HashMap<>();
        //hasmap dapat menyimpan elemen sebagai kunci dan juga frekuensi

        //menghitung frekuensi dalam setiap element
        for(int angka : array){
            frekuensi.put(angka, frekuensi.getOrDefault(angka, 0)+1);
            //jika element sudah ada di hasmap, maka frekuensi ditambahkan (+1)
            //jika belum ada, inisialisasikan dengan nilai 1
        }
        //menampilkan hasil  
        System.out.println("frekuensi dalam setiap element dalam array: ");
        for ( int angka: frekuensi.keySet()){
            System.out.println(angka+ " muncul "+ frekuensi.get(angka)+ " kali ");
        }
    }
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        //menginput jumlah element array
        System.out.println("masukkan jumlah element array yang anda mau: ");
        int jumlah = s.nextInt();

        //input element dari user
        int[]array = new int [jumlah];
        System.out.println("masukkan nilai elemt nya: ");
        for (int i = 0; i < jumlah; i++) {
            System.out.println("element ke- " + (i+1)+ " : ");
            array[i] = s.nextInt();
            
        }
        hitungFrekuensi(array);
        s.close();
    }
    
}
    

