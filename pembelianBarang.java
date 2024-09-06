import java.util.Scanner;

public class pembelianBarang {
    public static void main(String[] args) {
       
       
        double total, diskon, potongan;

        Scanner input = new Scanner(System.in);
        System.out.println("masukkan total pembelian: ");
        total = input.nextDouble();

        if (total > 150000) {
            potongan = 0;
            diskon = 0.1*total;
            total -= diskon;
            
        } else {
            diskon = 0;
            potongan = 5000; 
            total = potongan;
            
        }

        System.out.println("diskon: "+diskon);
        System.out.println("potongan harga: "+potongan);
        System.out.println("total yang dibayarkan: "+total);


    }
    
}
