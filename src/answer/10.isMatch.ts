function isMatch(s: string, p: string): boolean {
    let  j = 0;
    for (let i = 0, length = p.length; i < length; i++) {
        const target = p[i];
        
        if (p[i + 1] === '*') {
            do {
                const someResult =  isMatch(s.slice(j), p.slice(i + 2));
                if (someResult) {
                    return true;
                }
            } while(s[j] && (s[j++] === target || target === '.'));
            return false;
        }
        else if (target === '.' && s[j++]) {
            continue
        } else if (target !== s[j]) {
            return false;
        }
        j++;
    }
    
    return !s[j];
};

console.log(isMatch('a', '.*..a*'));
