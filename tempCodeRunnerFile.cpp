// #include<iostream>
// using namespace std;
// void printcnt(int arr[], int n)
// {
//     int min = INT_MAX;
//     int count = 0;
//     for(int i=0;i<n;i++){
//         cin>>arr[i];
//     }
 
//     for (int i = n - 1; i >= 0; i--) {
//         if (arr[i] > min) {
//             count++;
//         }
//         if (arr[i] <= min) {
//             min = arr[i];
//         }
//     }
 
//     cout<<count;
// }
// int main(){
//     int n;
//     cin>>n;
//     int arr[100];
//     printcnt(arr,n);
   
   
// }

#include<iostream>
using namespace std;
void printcnt(int arr[], int n)
{
    int count = 0;
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(i<j && arr[i]>arr[j]){
                count++;
            }
        }
    }
 
    cout<<count;
}
int main(){
    int n;
    cin>>n;
    int arr[100];
    printcnt(arr,n);
   
}