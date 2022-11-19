/* 
        * * * * * *
          * * * *
           * * *
             *
              
            
*/
// import java.util.*;
public class pattern {
    static public void main(String args[]){
          
         
        
        for(int i=0;i<5;i++){
            for(int j=i;j<5;j++){
                System.out.print("*  ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();
     

        for(int i=0;i<5;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*  ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        for(int i=0;i<5;i++){
            for(int j=0;j<5-i-1;j++){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        for(int i=0;i<5;i++){
            for(int j=0;j<i;j++){
                System.out.print(" ");
            }
            for(int j=i;j<5;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        for(int i=0;i<5;i++){
            for(int j=0;j<i;j++){
                System.out.print("  ");
            }
             
            System.out.print("*");
          
            System.out.println();
        }


        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        for(int i=0;i<5;i++){
            for(int j=i;j<5;j++){
                System.out.print("  ");
            }
             
            System.out.print("*");
          
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        // for(int i=1;i<=5;i++){
        //     for(int j=0;j<i;j++){
        //         System.out.print("  ");
        //     }
             
        //     System.out.print(i);
        //     for(int j=i;j<5;j++){
        //         System.out.print("  ");
        //     }
             
        //     System.out.print(i);
          
        //     System.out.println();
        // }
         
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        int arr[][] = {{1,2,3},{4,5,6},{7,8,9}};
        // System.out.println(Arrays.toString(arr)); 
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                if(i==j)System.out.print(arr[i][j]+" ");
                else System.out.print("  ");
            }
             
            
          
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        int brr[][] = {{1,2,3},{4,5,6},{7,8,9}};
        // System.out.println(Arrays.toString(arr)); 
        for(int i=0;i<3;i++){
            int j=3;
            for( j=3;j>i;j--){
                
                System.out.print("  ");
            }

            System.out.print(brr[i][j]+" ");
             
            
          
            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        //  Scanner sc = new Scanner(System.in);
         int r = 5;
        for(int i=1;i<=r;i++){
            for( int j=r;j>i;j--){
                
                System.out.print(" ");
            }
            for( int j=0;j<i;j++){
                
                System.out.print("* ");
            }

            System.out.println();
        }
         
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


        //  Scanner sc = new Scanner(System.in);
         int ro =5;
        for(int i=0;i<=ro;i++){
            for( int j=0;j<i;j++){
                
                System.out.print(" ");
            }
            for( int j=i;j<ro;j++){
                
                System.out.print("* ");
            }

            System.out.println();
        }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();


         
        // int p=1;
        // int n = 5;
        // int i, j, k = 0;
        // for (i = n - 1; i >= 0; i--)
        // {
        //     // outer gap loop
        //     for (j = n - 1; j > k; j--)
        //     {
        //         System.out.print(" ");
        //     }
 
        //     // 65 is ASCII of 'A'
        //     System.out.print((char)(i + 65));
 
        //     // inner gap loop
        //     for (j = 1; j < (k * 2); j++)
        //         System.out.print(" ");
 
            // if (i < n - 1)
            //     System.out.print((char)(i + 65));
        //     System.out.print("\n");
        //     k++;
        // }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();
         
        // int n1 = 5;
        // int k=1;

        // for(int i=0;i<n1;i++){
        //     for(int j =0; j<i; j++){
        //         System.out.print(" ");
        //     }
        //     System.out.print((char)(i + 65));
        //     for (int j = 0; j < ((n1-k) * 2-1); j++){
        //         System.out.print(" ");
        //     }
                
        //     if (!(i==n1-1)
            
        //     )System.out.print((char)(i + 65));

        //     System.out.print("\n");
        //     k++;
        // }
        System.out.println();
        System.out.println("-----------------------------------------------------------------");
        System.out.println();

        int n1 = 5;
        int k=1;

        for(int i=0;i<n1;i++){
            for(int j =i; j<n1; j++){
                System.out.print(" ");
            }
            System.out.print((char)(i + 65));
            for (int j = 0; j < ((n1-k) * 2-1); j++){
                System.out.print(" ");
            }
                
            if (!(i==n1-1)
            
            )System.out.print((char)(i + 65));

            System.out.print("\n");
            k++;
        }

}
}