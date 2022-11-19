import java.util.*;
public class quicksort {
    
    public static int Partition(int arr[], int start, int end){
        int i = start-1;
        int pivot = arr[end];

        for(int j=start; j<end; j++ ){

            if(arr[j] <pivot){
                i++;
                int temp  =  arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        i++;

        int temp = arr[i];
        arr[i] = pivot;
        arr[end] = temp;

        return i;

    }

    public static void QuickSort(int[] arr, int start,int end){
    //     if(start<end){
    //         int pivotx = Partition(arr,start , end);

    //         QuickSort(arr, start, pivotx-1);
    //         QuickSort(arr, pivotx+1, end);


    //     }
    // } 
    // public static void main(String args[]){
    //     int arr[] = {6,3,9,5,2,8};
    //     int n = arr.length ;
    //     for(int i=0;i<n;i++){
    //         System.out.print(arr[i]+"  ");
    //    }
    //     QuickSort(arr, 0,n-1);

    //     System.out.println();
    //     for(int i=0;i<n;i++){
    //          System.out.print(arr[i]+"  ");
    //     }
    int[] my_array = { 5, 4, 6, 1, 3, 2, 7, 8, 9 };
    System.out.println("Index position of 5 is: " + my_array.contain(5));
    }
}
