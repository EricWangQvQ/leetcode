class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1?.val && !l1?.next) {
        return l2;
    }
    if (!l2?.val && !l2?.next) {
        return l1;
    }
    let result = null;
    let curNode = null;
    let l1Node: ListNode | null = l1;
    let l2Node: ListNode | null = l2;
    let up = 0;
    while(l1Node?.val !== undefined || l2Node?.val !== undefined || up) {
        const val = (l1Node?.val || 0) + (l2Node?.val || 0) + up;
        const newNode = new ListNode(val % 10, null);
        up = Math.floor(val / 10);
        if (!curNode) {
            result = newNode;
            curNode = newNode;
        } else {
            curNode.next = newNode;
            curNode = newNode;
        }
        l1Node = l1Node?.next || null;
        l2Node = l2Node?.next || null;
    }
    return result;
};

const l1 = new ListNode(9, new ListNode(5, new ListNode(1, null)));
const l2 = new ListNode(3, new ListNode(2, new ListNode(4, null)));

console.log(addTwoNumbers(l1, l2));
