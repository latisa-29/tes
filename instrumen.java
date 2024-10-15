package tugas2;

public class instrumen {
   protected String name;
   protected double price;

   public String getName() {
      return this.name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public double getPrice() {
      return this.price;
   }

   public void setPrice(double price) {
      this.price = price;
   }

   public instrumen() {
      name = "nama";
      price = 0;
   }

   public instrumen(String name, double price) {
      this.name = name;
      this.price = price;
   }

   public void print() {
      System.out.println("nama: " + name);
      System.out.println("price: " + price);
   }

}
