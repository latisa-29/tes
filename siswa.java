//Object class
public class siswa {
  int absen;
  String nama;
  double ipk;

  public int getAbsen() {
    return this.absen;
  }

  public void setAbsen(int absen) {
    this.absen = absen;
  }

  public String getNama() {
    return this.nama;
  }

  public void setNama(String nama) {
    this.nama = nama;
  }

  public double getIpk() {
    return this.ipk;
  }

  public void setIpk(double ipk) {
    this.ipk = ipk;
  }

 //Constructor
 public siswa (){
   absen = 0;
    nama = "kosng";
    ipk = 0.0;

 } 

 //Constructor Parameter
 public siswa (int id, String nama, double ipk) {
   //variabel = parameter 
   this.absen=absen; 
   this.nama=nama;
   this.ipk=ipk;
 }

 //method print 
 public void print() {
   System.out.println("absen : " + absen);
   System.out.println("nama : " + nama);
   System.out.println("ipk : " + ipk);
 }

}

    