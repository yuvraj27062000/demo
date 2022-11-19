// import java.util.*;
// public class kthLargest {
//     public static void main(String args[]){
//          PriorityQueue<Integer> maxheap = new PriorityQueue<>(Collections.reverseOrder());

//         int arr[] = {64,34,67,7,55,4,5,7,8,553,4,6,7,4,44};

//         int k = 5;
//         for(int i=0; i<arr.length;i++){
            
//             maxheap.add(arr[i]);
         
//         }
//         // Iterator itr = maxheap.iterator();

//         // while(itr.hasNext()){
//         //     System.out.print(itr.next()+" ");
//         // }
//        int j=0;
//        int size = maxheap.size();
//         while(size-->0){
//             arr[j++]= maxheap.poll();
//         }
//         System.out.print(Arrays.toString(arr));
//         System.out.println();
//         System.out.print(arr[k-1]);        

//     }
// }

// import java.util.*;
public class kthLargest {

    public static void Merge(int[] arr, int start, int mid, int end){

       
        int n1 = mid-start+1;
        int n2 = end-mid;
        int L[]  = new int[n1];
        int R[]  = new int[n2];
        // int Sarr[]  = new int[n2+n1];
        
        for(int i=0;i<n1;++i){
            L[i] = arr[start+i];
        }
        for(int j=0;j<n2;++j){
            R[j] = arr[mid+1+j];
        }

        int i=0;
        int j=0;
        int k=start;
        while(i<n1 && j<n2){
            if(L[i] >= R[j]){
                arr[k++] = L[i++];
            }
            else{
                arr[k++] = R[j++];
            }
        }
        while(i<n1){
            arr[k++] = L[i++];
        }
        while(j<n2){
            arr[k++] = R[j++];
        }

    }

    public static void MergeSort(int[] arr, int start, int end){
        if(start<end){
                int mid = (end+start)/2;

                MergeSort(arr, start, mid);
                MergeSort(arr, mid+1, end);

                Merge(arr, start, mid, end);

        }
    }
    public static void main(String args[]){

        int arr[] = {64,34,67,7,55,4,5,7,8,553,4,6,7,4,44};

        int k = 5;
        int n = arr.length;
        MergeSort(arr,0,n-1) ;     
        int i=0;
        while(k-->0){
           System.out.print(arr[i++]+" ");
        }
    }
}