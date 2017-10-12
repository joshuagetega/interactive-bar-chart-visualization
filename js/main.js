

// DATASETS

// Global variable with 1198 pizza deliveries
// console.log(deliveryDataCopy);

// Global variable with 200 customer feedbacks
// console.log(feedbackDataCopy.length);


// FILTER DATA, THEN DISPLAY SUMMARY OF DATA & BAR CHART

createVisualization();

function createVisualization() {
	var deliveryDataCopy = deliveryData;
	var feedbackDataCopy = feedbackData;


	var selectBox = document.getElementById("area");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;

	var selectBox2 = document.getElementById("order_type");
	var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;

	//renders the bar chart according to options selected
	if (selectedValue == "all" && selectedValue2 == "all") {
		renderBarChart(deliveryDataCopy);
	} else if (selectedValue == "all" && selectedValue2 == "web") {
		var allWebData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.order_type == "web") && (index < deliveryDataCopy.length);
		});
		renderBarChart(allWebData);
	} else if (selectedValue == "all" && selectedValue2 == "phone") {
		var allPhoneData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.order_type == "phone") && (index < deliveryDataCopy.length);
		});
		renderBarChart(allPhoneData);
	} else if (selectedValue == "Boston" && selectedValue2 == "all") {
		var bostonAllData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Boston") && (index < deliveryDataCopy.length);
		});
		renderBarChart(bostonAllData);
	} else if (selectedValue == "Boston" && selectedValue2 == "web") {
		var bostonWebData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Boston") && (elem.order_type == "web") && (index < deliveryDataCopy.length);
		});
		renderBarChart(bostonWebData);
	} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
		var bostonPhoneData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Boston") && (elem.order_type == "phone") && (index < deliveryDataCopy.length);
		});
		renderBarChart(bostonPhoneData);
	} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
		var cambridgeAllData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Cambridge") && (index < deliveryDataCopy.length);
		});
		renderBarChart(cambridgeAllData);
	} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
		var cambridgeWebData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Cambridge") && (elem.order_type == "web") && (index < deliveryDataCopy.length);
		});
		renderBarChart(cambridgeWebData);
	} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
		var cambridgePhoneData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Cambridge") && (elem.order_type == "phone") && (index < deliveryDataCopy.length);
		});
		renderBarChart(cambridgePhoneData);
	} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
		var somervilleAllData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Somerville") && (index < deliveryDataCopy.length);
		});
		renderBarChart(somervilleAllData);
	} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
		var somervilleWebData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Somerville") && (elem.order_type == "web") && (index < deliveryDataCopy.length);
		});
		renderBarChart(somervilleWebData);
	} else {
		var somervillePhoneData = deliveryDataCopy.filter(function (elem, index) {
			return (elem.area == "Somerville") && (elem.order_type == "phone") && (index < deliveryDataCopy.length);
		});
		renderBarChart(somervillePhoneData);
	}


	document.getElementById("content-1").innerHTML = "Number of pizza deliveries: " + deliveries();

	document.getElementById("content-2").innerHTML = "Number of all delivered pizzas: " + totalPizza();

	document.getElementById("content-3").innerHTML = "Average delivery time: " + avgDeliveryTime();

	document.getElementById("content-4").innerHTML = "Total Sales in USD: " + sales();

	document.getElementById("content-5").innerHTML = "Number of all feedback entries: " + feedbackDataCopy.length;

	document.getElementById("content-6").innerHTML = "Feedback entries portraying low quality service: " + numLowQuality();

	document.getElementById("content-7").innerHTML = "Feedback entries portraying medium quality service: " + numMediumQuality();

	document.getElementById("content-8").innerHTML = "Feedback entries portraying high quality service: " + numHighQuality();


	//computes number of deliveries
	function deliveries() {
		if (selectedValue == "all" && selectedValue2 == "all") {
			return deliveryDataCopy.length;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			return allWebData.length;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			return allPhoneData.length;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			return bostonAllData.length;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			return bostonWebData.length;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			return bostonPhoneData.length;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			return cambridgeAllData.length;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			return cambridgeWebData.length;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			return cambridgePhoneData.length;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			return somervilleAllData.length;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			return somervilleWebData.length;
		} else {
			return somervillePhoneData.length;
		}
	}

	//computes number of pizzas
	function totalPizza() {
		var numPizza = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < deliveryDataCopy.length; i++) {
				numPizza = numPizza + deliveryDataCopy[i].count;
			}
			return numPizza;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			for (var i = 0; i < allWebData.length; i++) {
				numPizza = numPizza + allWebData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			for (var i = 0; i < allPhoneData.length; i++) {
				numPizza = numPizza + allPhoneData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			for (var i = 0; i < bostonAllData.length; i++) {
				numPizza = numPizza + bostonAllData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			for (var i = 0; i < bostonWebData.length; i++) {
				numPizza = numPizza + bostonWebData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			for (var i = 0; i < bostonPhoneData.length; i++) {
				numPizza = numPizza + bostonPhoneData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			for (var i = 0; i < cambridgeAllData.length; i++) {
				numPizza = numPizza + cambridgeAllData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			for (var i = 0; i < cambridgeWebData.length; i++) {
				numPizza = numPizza + cambridgeWebData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			for (var i = 0; i < cambridgePhoneData.length; i++) {
				numPizza = numPizza + cambridgePhoneData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			for (var i = 0; i < somervilleAllData.length; i++) {
				numPizza = numPizza + somervilleAllData[i].count;
			}
			return numPizza;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			for (var i = 0; i < somervilleWebData.length; i++) {
				numPizza = numPizza + somervilleWebData[i].count;
			}
			return numPizza;
		} else {
			for (var i = 0; i < somervillePhoneData.length; i++) {
				numPizza = numPizza + somervillePhoneData[i].count;
			}
			return numPizza;
		}
	}

	//computes average delivery time
	function avgDeliveryTime() {
		var totalTime = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < deliveryDataCopy.length; i++) {
				totalTime = totalTime + deliveryDataCopy[i].delivery_time;
			}
			return (totalTime / (deliveryDataCopy.length));
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			for (var i = 0; i < allWebData.length; i++) {
				totalTime = totalTime + allWebData[i].delivery_time;
			}
			return (totalTime / (allWebData.length));
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			for (var i = 0; i < allPhoneData.length; i++) {
				totalTime = totalTime + allPhoneData[i].delivery_time;
			}
			return (totalTime / (allPhoneData.length));
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			for (var i = 0; i < bostonAllData.length; i++) {
				totalTime = totalTime + bostonAllData[i].delivery_time;
			}
			return (totalTime / (bostonAllData.length));
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			for (var i = 0; i < bostonWebData.length; i++) {
				totalTime = totalTime + bostonWebData[i].delivery_time;
			}
			return (totalTime / (bostonWebData.length));
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			for (var i = 0; i < bostonPhoneData.length; i++) {
				totalTime = totalTime + bostonPhoneData[i].delivery_time;
			}
			return (totalTime / (bostonPhoneData.length));
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			for (var i = 0; i < cambridgeAllData.length; i++) {
				totalTime = totalTime + cambridgeAllData[i].delivery_time;
			}
			return (totalTime / (cambridgeAllData.length));
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			for (var i = 0; i < cambridgeWebData.length; i++) {
				totalTime = totalTime + cambridgeWebData[i].delivery_time;
			}
			return (totalTime / (cambridgeWebData.length));
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			for (var i = 0; i < cambridgePhoneData.length; i++) {
				totalTime = totalTime + cambridgePhoneData[i].delivery_time;
			}
			return (totalTime / (cambridgePhoneData.length));
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			for (var i = 0; i < somervilleAllData.length; i++) {
				totalTime = totalTime + somervilleAllData[i].delivery_time;
			}
			return (totalTime / (somervilleAllData.length));
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			for (var i = 0; i < somervilleWebData.length; i++) {
				totalTime = totalTime + somervilleWebData[i].delivery_time;
			}
			return (totalTime / (somervilleWebData.length));
		} else {
			for (var i = 0; i < somervillePhoneData.length; i++) {
				totalTime = totalTime + somervillePhoneData[i].delivery_time;
			}
			return (totalTime / (somervillePhoneData.length));
		}
	}

	//computes total sales
	function sales() {
		var totalSale = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < deliveryDataCopy.length; i++) {
				totalSale = totalSale + deliveryDataCopy[i].price;
			}
			return totalSale;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			for (var i = 0; i < allWebData.length; i++) {
				totalSale = totalSale + allWebData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			for (var i = 0; i < allPhoneData.length; i++) {
				totalSale = totalSale + allPhoneData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			for (var i = 0; i < bostonAllData.length; i++) {
				totalSale = totalSale + bostonAllData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			for (var i = 0; i < bostonWebData.length; i++) {
				totalSale = totalSale + bostonWebData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			for (var i = 0; i < bostonPhoneData.length; i++) {
				totalSale = totalSale + bostonPhoneData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			for (var i = 0; i < cambridgeAllData.length; i++) {
				totalSale = totalSale + cambridgeAllData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			for (var i = 0; i < cambridgeWebData.length; i++) {
				totalSale = totalSale + cambridgeWebData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			for (var i = 0; i < cambridgePhoneData.length; i++) {
				totalSale = totalSale + cambridgePhoneData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			for (var i = 0; i < somervilleAllData.length; i++) {
				totalSale = totalSale + somervilleAllData[i].price;
			}
			return totalSale;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			for (var i = 0; i < somervilleWebData.length; i++) {
				totalSale = totalSale + somervilleWebData[i].price;
			}
			return totalSale;
		} else {
			for (var i = 0; i < somervillePhoneData.length; i++) {
				totalSale = totalSale + somervillePhoneData[i].price;
			}
			return totalSale;
		}
	}

	//computes number of feedback entries that communicate low quality service
	function numLowQuality() {
		var sum = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < feedbackDataCopy.length; i++) {
				if (feedbackDataCopy[i].quality == "low") {
					sum++;
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			var feedbackAllWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			var feedbackAllPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			var feedbackBostonAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			var feedbackBostonWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			var feedbackBostonPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			var feedbackCambridgeAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			var feedbackCambridgeWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			var feedbackCambridgePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			var feedbackSomervilleAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			var feedbackSomervilleWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else {
			var feedbackSomervillePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "low") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervillePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervillePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		}
	}


	//computes number of feedback entries that communicate medium quality service
	function numMediumQuality() {
		var sum = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < feedbackDataCopy.length; i++) {
				if (feedbackDataCopy[i].quality == "medium") {
					sum++;
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			var feedbackAllWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			var feedbackAllPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			var feedbackBostonAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			var feedbackBostonWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			var feedbackBostonPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			var feedbackCambridgeAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			var feedbackCambridgeWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			var feedbackCambridgePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			var feedbackSomervilleAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			var feedbackSomervilleWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else {
			var feedbackSomervillePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "medium") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervillePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervillePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		}
	}

	//computes number of feedback entries that communicate high quality service
	function numHighQuality() {
		var sum = 0;
		if (selectedValue == "all" && selectedValue2 == "all") {
			for (var i = 0; i < feedbackDataCopy.length; i++) {
				if (feedbackDataCopy[i].quality == "high") {
					sum++;
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "web") {
			var feedbackAllWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "all" && selectedValue2 == "phone") {
			var feedbackAllPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackAllPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackAllPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "all") {
			var feedbackBostonAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "web") {
			var feedbackBostonWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Boston" && selectedValue2 == "phone") {
			var feedbackBostonPhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackBostonPhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackBostonPhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Boston" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "all") {
			var feedbackCambridgeAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "web") {
			var feedbackCambridgeWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgeWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgeWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Cambridge" && selectedValue2 == "phone") {
			var feedbackCambridgePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackCambridgePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackCambridgePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Cambridge" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "all") {
			var feedbackSomervilleAll = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleAll.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleAll[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville") {
						sum++;
					}
				}
			}
			return sum;
		} else if (selectedValue == "Somerville" && selectedValue2 == "web") {
			var feedbackSomervilleWeb = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervilleWeb.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervilleWeb[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "web") {
						sum++;
					}
				}
			}
			return sum;
		} else {
			var feedbackSomervillePhone = feedbackDataCopy.filter(function (elem, index) {
				return (elem.quality == "high") && (index < feedbackDataCopy.length);
			});
			for (var i = 0; i < feedbackSomervillePhone.length; i++) {
				for (var j = 0; j < deliveryDataCopy.length; j++) {
					if (feedbackSomervillePhone[i].delivery_id == deliveryDataCopy[j].delivery_id && deliveryDataCopy[j].area == "Somerville" && deliveryDataCopy[j].order_type == "phone") {
						sum++;
					}
				}
			}
			return sum;
		}
	}

}














