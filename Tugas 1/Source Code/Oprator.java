public class Oprator { 
    public static void main(String[] args) { 
        // Deklarasi variabel
        boolean Bool1, Bool2, TF; 
        int i, j, hsl; 
        float x, y, res;  

        // Menampilkan teks awal
        System.out.println("Hasil dari berbagai operasi:\n");

        // Operasi logika
        Bool1 = true; 
        Bool2 = false; 

        TF = Bool1 && Bool2;  
        System.out.println("Boolean AND      : " + TF); 
        
        TF = Bool1 || Bool2;  
        System.out.println("Boolean OR       : " + TF); 
        
        TF = !Bool1;  
        System.out.println("Boolean NOT      : " + TF); 
        
        TF = Bool1 ^ Bool2;  
        System.out.println("Boolean XOR      : " + TF); 

        System.out.println("\nOperasi Numerik (Integer):");
        
        // Operasi numerik dengan integer
        i = 5; 
        j = 2;   
        
        hsl = i + j;  
        System.out.println("Penjumlahan      : " + hsl); 
        
        hsl = i - j;  
        System.out.println("Pengurangan      : " + hsl); 
        
        hsl = i * j;  
        System.out.println("Perkalian        : " + hsl); 
        
        hsl = i / j;  
        System.out.println("Pembagian bulat  : " + hsl); 
        
        hsl = i % j;  
        System.out.println("Modulo           : " + hsl);  

        System.out.println("\nOperasi Numerik (Float):");
        
        // Operasi numerik dengan float
        x = 5; 
        y = 5;   
        
        res = x + y;  
        System.out.println("Penjumlahan      : " + res); 
        
        res = x - y;  
        System.out.println("Pengurangan      : " + res); 
        
        res = x * y;  
        System.out.println("Perkalian        : " + res); 
        
        res = x / y;  
        System.out.println("Pembagian        : " + res); 

        System.out.println("\nOperasi Relasional (Integer):");
        
        // Operasi relasional dengan integer
        System.out.println("i == j           : " + (i == j));  
        System.out.println("i != j           : " + (i != j));  
        System.out.println("i < j            : " + (i < j));  
        System.out.println("i > j            : " + (i > j));  
        System.out.println("i <= j           : " + (i <= j));  
        System.out.println("i >= j           : " + (i >= j));  

        System.out.println("\nOperasi Relasional (Float):");
        
        // Operasi relasional dengan float
        System.out.println("x != y           : " + (x != y));  
        System.out.println("x < y            : " + (x < y));  
        System.out.println("x > y            : " + (x > y));  
        System.out.println("x <= y           : " + (x <= y));  
        System.out.println("x >= y           : " + (x >= y));  
    } 
}
