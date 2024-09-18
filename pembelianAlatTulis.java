package perulangan;

import java.util.Scanner;

public class pembelianAlatTulis {
    public static void main(String[] args) {
        int pilihan,Jumlah=0;
        double harga=0,total, temp=0;
        String tambahBeli;
        do {
        Scanner s = new Scanner (System.in);
        System.out.println("List alat tulis");
        System.out.println("1. Buku 4000\n2. pensil 2500\n3. penghapus 1000\n4. penggaris 2500");
        System.out.println("inputkan pembelian: 1/2/3/4");
        pilihan = s.nextInt();
        System.out.println("jumlah beli");  
        Jumlah = s.nextInt();


        switch (pilihan) {
            case 1:
                harga=4000;
                break;
            case 2:
                harga=2500;
                break;
            case 3:
                harga=1000;
                break;
            case 4:
                harga=2500;
                break;
            default:
                break;
        }
        total=Jumlah*harga;
        temp += total;
        System.out.println("apakah beli lagi (ya/tidak)");
        tambahBeli = s.next();
    }while(tambahBeli.equalsIgnoreCase ("ya"));
    System.out.println("total yang dibayarkan = " +temp);
}
    
}
