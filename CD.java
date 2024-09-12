package Persewaan;

public class CD extends Product {
    public static void main(String[] args) {
        
    }
    private String artist;
    private int TotalSong;
    private String label;

    public CD () {
        number = 10;
        name = "Selamat Siang";
        quantity = 0;
        prince = 0.0;
        artist = "Salman";
        TotalSong = 8;
        label = "Sony music";

    }
    public void print(){
        System.out.println("Number: " + number);
        System.out.println("Name: "+ name);
        System.out.println("Quantity: " + quantity);
        System.out.println("Prince: "+ prince);
        System.out.println("Artist: "+ artist);
        System.out.println("Total Song: "+ TotalSong);
        System.out.println("Label: "+ label);
    }
    }