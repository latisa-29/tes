package Persewaan;
import java.util.Scanner;
public class DriveProduct {
    public static void main(String[] args) {
        String choice = "";
        CD cd = new CD();
        DVD dvd = new DVD ();
        Scanner a = new Scanner(System.in);
        System.out.println(" CD / DVD ");
        choice = a.nextLine();

        if (choice.equalsIgnoreCase("CD")){
            cd.print();
        }else if (choice.equalsIgnoreCase("DVD")){
            dvd.print();
        }
        a.close();
    }
}