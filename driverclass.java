package tugas2;

import java.util.Scanner;

public class driverclass {
    public static void main(String[] args) {
        Scanner in =new Scanner (System.in);
        
        System.out.println("pilih piano atau guitar");
        String pilihan = in.next();


        if (pilihan.equals("guitar")) {
            System.out.println("inputkan nama gitar");
            String nama = in.next();
            System.out.println("inputkan harga gitar");
            double price = in.nextDouble();
            System.out.println("inputkan jenis senar");
            int numstring = in.nextInt();
            System.out.println("gitar elektrik (true) / gitar akustik (false)");
            boolean isElectric = in.nextBoolean();

            guitar gitar1 = new guitar (nama, price, numstring, isElectric);
            gitar1.print();
         } else if (pilihan.equals("piano")) {
            System.out.println("inputkan nama piano");
            String nama = in.next();
            System.out.println("inputkan harga piano");
            double price = in.nextDouble();
            System.out.println("inputkan jenis piano");
            String jenispiano = in.next();
            piano piano2 = new piano (nama, jenispiano, price);
            piano2.print();
                
            }

            
        }
    }
    

