export const compute = (strand1, strand2) => {
	var exceptionMsg;

    if (strand1.length !== strand2.length) {
        exceptionMsg = 'left and right strands must be of equal length'

        if (strand1.length === 0) {
        	exceptionMsg = 'left strand must not be empty';
        } else if (strand2.length === 0) {
        	exceptionMsg = 'right strand must not be empty';
        }

        throw exceptionMsg;
    }

    return [...strand1]
    			.filter((element, idx) => element !== strand2.charAt(idx))
    			.length;
}
