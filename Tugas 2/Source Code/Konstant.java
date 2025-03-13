import java.util.Scanner; 
public class Konstant { 
 public static void main(String[] args) { 

   final float PHI = 3.1415f;  
   float r; 
   Scanner masukan=new Scanner(System.in); 
   System.out.print ("Jari-jari lingkaran =");  
   r = masukan.nextFloat();
   System.out.print ("Luas lingkaran = "+ (PHI * r * r)+"\n");  
   System.out.print ("Akhir program \n");  
 } 
} 