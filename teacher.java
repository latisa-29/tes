package tugas1;

public class teacher extends person{
    private String subject;

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

public teacher (){
    subject = "subject";
}
public teacher (String subject, String name, int age){
    this.subject = subject;
}
public void print (){
    System.out.println("subject: "+subject);
}
}