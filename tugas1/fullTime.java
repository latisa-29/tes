package tugas1;

public class fullTime extends teacher {
    private int anualSalary;
    private String unit;

    public int getAnualSalary() {
        return this.anualSalary;
    }

    public void setAnualSalary(int anualSalary) {
        this.anualSalary = anualSalary;
    }

    public String getUnit() {
        return this.unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

public fullTime (){
    anualSalary = 0;
    unit = unit;
}
public fullTime ( int anualSalary, String unit) {
    this.anualSalary = anualSalary;
    this.unit = unit;
}
public void print (){
    System.out.println("anualSalary: "+anualSalary);
    System.out.println("unit: "+unit);
}
}
