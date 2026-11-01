class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if( s.length!==t.length){
            return false;
        }
      
              
     const arr1= s.split("").sort();
     const arr2= t.split("").sort();

     return arr1.join("")=== arr2.join("");
                 
                }

               
            }
            

      