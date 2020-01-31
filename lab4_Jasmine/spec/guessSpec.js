describe("Guess A Number", function(){
	
	describe("Test to Pass",function(){
		describe("Test to Pass input 4",function(){
			it("should return You guessed it!",function(){
				var msg = "You guessed it!";
				expect(guessNum(4)).toEqual(msg);
			});
		});
	
		describe("Test to Pass input 7",function(){
			it("should return Guess again.",function(){
				var msg = "Guess again.";
				expect(guessNum(7)).toEqual(msg);
			});
		});
		describe("Test to Pass Boundary Conditions",function(){
			it("should return Guess again with input 1.",function(){
				var msg = "Guess again.";
				expect(guessNum(1)).toEqual(msg);
			});
		
			it("should return Guess again with input 10.",function(){
				var msg = "Guess again.";
				expect(guessNum(10)).toEqual(msg);
			});
		
			it("should return Guess again with input 2.",function(){
				var msg = "Guess again.";
				expect(guessNum(2)).toEqual(msg);
			});
		
			it("should return Guess again with input 9.",function(){
				var msg = "Guess again.";
				expect(guessNum(9)).toEqual(msg);
			});
		});
	});
	
	describe("Test to Fail",function(){
		describe("Test to Fail Boundary Conditions",function(){
			it("should return Way off!!!! Pick between 1 and 10. with input 0.",function(){
				var msg = "Way off!!!! Pick between 1 and 10.";
				expect(guessNum(0)).toEqual(msg);
			});
		
			it("should return Way off!!!! Pick between 1 and 10. with input 11.",function(){
				var msg = "Way off!!!! Pick between 1 and 10.";
				expect(guessNum(11)).toEqual(msg);
			});
		});
		
		describe("Test to Fail when input is not a number.", function(){
		it("should return A number was not input.",function(){
			var msg = "A number was not input.";
			expect(guessNum("abc")).toEqual(msg);
		});
	});
	
		describe("Test to Fail when input is empty.", function(){
		it("should return A value was not entered.",function(){
			var msg = "A value was not entered.";
			expect(guessNum("")).toEqual(msg);
		});
	});
	
		describe("Test to Fail input less than 1 and greater than 10", function(){
			it("should return Way off!!!! Pick between 1 and 10 with input -1.",function(){
				var msg = "Way off!!!! Pick between 1 and 10.";
				expect(guessNum(-1)).toEqual(msg);
			});
		
			it("should return Way off!!!! Pick between 1 and 10 with input 15.",function(){
				var msg = "Way off!!!! Pick between 1 and 10.";
				expect(guessNum(15)).toEqual(msg);
			});
		});
	});
});