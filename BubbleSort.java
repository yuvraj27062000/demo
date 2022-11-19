public class BubbleSort {
    
    static public void main(String args[]){
        int arr[] = {5,4,33,6,8,99,3,5,77,6,5,4,} ;
        int n=arr.length;

        for(int i=0; i<n;i++){
            for(int j=0; j<n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }
}
