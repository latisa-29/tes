package tugas2;

public class piano extends instrumen {
    private String pianoType;

    public String getPianoType() {
        return this.pianoType;
    }

    public void setPianoType(String pianoType) {
        this.pianoType = pianoType;
    }

    public piano() {
        super();
        pianoType = "pianoType";
    }

    public piano(String name, String pianoType, double price) {
        super(name, price);
        this.pianoType = pianoType;
    }

    public void print() {
        super.print();
        System.out.println("pianoType: " + pianoType);
    }

}
