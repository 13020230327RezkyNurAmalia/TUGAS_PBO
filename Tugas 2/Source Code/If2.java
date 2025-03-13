import java.util.Scanner; 

public class If2 { 

 public static void main(String[] args) { 
  // TODO Auto-generated method stub 

  int a; 
  Scanner masukan=new Scanner(System.in); 

 
  System.out.print ("Contoh IF dua kasus \n"); 
 
  System.out.print ("Ketikkan suatu nilai integer :");  
  a=masukan.nextInt(); 
 
  if (a >= 0){ 
   System.out.println ("Nilai a positif "+ a); 
  }else /* a< 0 */  
  { 
   System.out.println ("Nilai a negatif "+ a); 
  } 
 
 } 
 
} 