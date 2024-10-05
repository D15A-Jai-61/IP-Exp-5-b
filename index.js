function* primeGenerator() {
    yield 2; // 2 is the first prime number
    let num = 3;
    
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num += 2; // We can skip even numbers after 2
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes() {
    const limit = parseInt(document.getElementById('limit').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (isNaN(limit) || limit < 2) {
        resultDiv.innerHTML = 'Please enter a valid number greater than or equal to 2.';
        return;
    }

    const primes = [];
    const generator = primeGenerator();

    for (const prime of generator) {
        if (prime > limit) {
            break;
        }
        primes.push(prime);
    }

    resultDiv.innerHTML = `Prime numbers up to ${limit}: ${primes.join(', ')}`;
}
