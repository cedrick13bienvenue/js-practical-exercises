{/*You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready 
to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
If it is possible, return YES, otherwise return NO.

Example
x1 = 1
v2 = 2
x2 = 1
v2 = 2



After one jump, they are both at , (, ), so the answer is YES.

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
Returns

string: either YES or NO
Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

Constraints

Sample Input 0

0 3 4 2
Sample Output 0

YES
Explanation 0

The two kangaroos jump through the following sequence of locations:

image

From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after 
same number of jumps ( jumps), and we print YES.

Sample Input 1

0 2 5 3
Sample Output 1

NO
Explanation 1

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). 
Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, 
the first kangaroo will never be able to catch up. Thus, we print NO.*/}

function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO"; // Same speed, check starting position
    }
    
    const n = (x2 - x1) / (v1 - v2);
    
    if (n >= 0 && Number.isInteger(n)) {
        return "YES";
    }
    
    return "NO";
}

// Sample Inputs and Outputs
console.log(kangaroo(0, 3, 4, 2)); // Output: "YES"
console.log(kangaroo(0, 2, 5, 3)); // Output: "NO"


