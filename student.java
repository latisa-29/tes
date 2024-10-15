package tugas1;

public class student extends person {
    private int studentNumber;
    private int score;
    private String major;

    public int getStudentNumber() {
        return this.studentNumber;
    }

    public void setStudentNumber(int studentNumber) {
        this.studentNumber = studentNumber;
    }

    public int getScore() {
        return this.score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getMajor() {
        return this.major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public student(){
        studentNumber = 17;
        score = 100;
        major = major;
    }
    public student (int studentNumber, int score, String major) {
    this.studentNumber = studentNumber;
    this.score = score;
    this.major = major;
     }
     public void print (){
        System.out.println("studentNumber: "+studentNumber);
        System.out.println("score: "+score);
        System.out.println("major: "+major);
     }
}
