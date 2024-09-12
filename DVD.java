package Persewaan;

public class DVD extends Product {
    protected int leght;
    protected String rating;
    protected String Studio;

    public DVD () {
        number = 11;
        name = "aku cinta kamu";
        quantity = 0;
        prince = 0.0;
        leght = 2;
        rating = "all age";
        Studio = "bandung";
 

    }
    public void print () {
        System.out.println("Number: " + number);
        System.out.println("Name: "+ name);
        System.out.println("Quantity: " + quantity);
        System.out.println("Prince: "+ prince);
        System.out.println("Leght: "+ leght);
        System.out.println("Rating: "+ rating);
        System.out.println("Studio: "+ Studio);
    }
    }