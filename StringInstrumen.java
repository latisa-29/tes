package tugas2;

public class StringInstrumen extends instrumen {
    private int numString;

    public int getNumString() {
        return this.numString;
    }

    public void setNumString(int numString) {
        this.numString = numString;
    }

    public StringInstrumen() {
        super();
        numString = 0;
    }

    public StringInstrumen(String name, double price, int numString) {
        super(name, price);
        this.numString = numString;
    }

    public void print() {
        super.print();
        System.out.println("numString: " + numString);
    }
}
