package tugas1;

public class partTime extends teacher {
    private int hoursworked;

    public int gethoursworked() {
		return this.hoursworked;
	}

    public void setInt( int hoursworked) {
		this.hoursworked = hoursworked;
	}

public partTime (){
    super();
    hoursworked = 0;
}
public partTime (String subject, String name, int age, int hoursworked){
    super(subject, name, age );
    this.hoursworked = hoursworked;
}
public int setSalary(){
    int salary = hoursworked * 10000;
    return salary;
}
public void print(){
    System.out.println("jam kerja: "+hoursworked);
    System.out.println("salary: "+setSalary());
}

}
