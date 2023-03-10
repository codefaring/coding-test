class Solution {
    public int solution(int n, int k) {
        int service = 0;
        for(int i = 10; i <= n; i++) {
            if(i % 10 == 0) {
                service++;
            }
        }
        return n * 12000 + (k - service)* 2000;
    }
}