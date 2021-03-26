const ContentData = [
  {
    id: 1,
    title: "House Robber",
    titleId: "problems-house-robber",
    explaination:
      "You are a professional robber planning to rob houses along a street Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight withoutalerting the police.",
    input: "nums = [1,2,3,1]",
    output: "4",
    codeString: `class Solution {
            public int rob(int[] nums) {
                
                int n=nums.length;
                if(n==0) return 0;
                int dp[]=new int[n+1];
                dp[0]=0;
                dp[1]=nums[0];
            
                for(int i=1;i<n;i++){
                    dp[i+1]=Math.max(dp[i],dp[i-1]+nums[i]);
                }
                return dp[n];
            }
    }`,
  },
  {
    id: 2,
    title: "Rotate Array",
    titleId: "problems-rotate-array",
    explaination:
      "Given an array, rotate the array to the right by k steps, where k is non-negative.",
    input: "nums = [1,2,3,4,5,6,7], k = 3",
    output: "[5,6,7,1,2,3,4]",
    codeString: `class Solution {
        public void rotate(int[] nums, int k) { 
            k=k%nums.length;
            reverse(nums, 0, nums.length-1);
            reverse(nums, 0, k-1);
            reverse(nums, k, nums.length-1);
        }
        
        public void reverse(int []nums, int start, int end){
            while(start<end){
                int temp=nums[start];
                nums[start]=nums[end];
                nums[end]=temp;
                start++;
                end--;
            }
        }
    }`,
  },
  {
    id: 3,
    title: "Word Break",
    titleId: "problems-word-break",
    explaination:
      "Given a string 's' and a dictionary of strings 'wordDict', return 'true' if 's' can be segmented into a space-separated sequence of one or more dictionary words.",
    input: `s = "leetcode", wordDict = ["leet","code"]`,
    output: "true",
    codeString: `class Solution {
        Map<String, Boolean> hm=new HashMap();
        
        public boolean wordBreak(String s, List<String> wordDict) {
            
            if(wordDict.contains(s))
                return true;
            if(hm.containsKey(s))
                return hm.get(s);
            
            for(int i=1;i<s.length();i++){
                String left=s.substring(0,i);
                if(wordDict.contains(left)&&wordBreak(s.substring(i),wordDict)){
                    hm.put(s,true);
                    return true;
                }
            }
            hm.put(s,false);
            return false;
        }
    }`,
  },
  {
    id: 4,
    title: "Two Sum",
    titleId: "problems-two-sum",
    explaination:
      "Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to 'target'.",
    input: `nums = [2,7,11,15], target = 9`,
    output: "[0,1] , Because nums[0] + nums[1] == 9, we return [0, 1]",
    codeString: `class Solution {
        public int[] twoSum(int[] nums, int target) {
            
            HashMap<Integer,Integer> hm=new HashMap();
            
            for(int i=0;i<nums.length;i++){
                
                int dif=target-nums[i];
                if(hm.containsKey(dif)){
                    return new int[]{i,hm.get(dif)};
                }
                hm.put(nums[i],i);
            }
            return new int[]{};
        }
    }`,
  },
  {
    id: 5,
    title: "Missing letters",
    titleId: "problems-missing-letters",
    explaination:
      "Find the missing letter in the passed letter range and return it.If all letters are present in the range, return 'undefined'.",
    input: `abce`,
    output: "d",
    codeString: `function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
        return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}    
fearNotLetter("abce");`,
  },
];
export default ContentData;
