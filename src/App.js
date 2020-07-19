import React, { useState } from "react";
import "./App.css";

function App() {
	const [travelExpenses, setTravelExpenses] = useState(19);
	const [officeCosts, setOfficeCosts] = useState(2000);
	const [travelDistance, setTravelDistance] = useState(30);
	const [workingDays, setWorkingDays] = useState(5);
	const [numberEmployees, setNumberEmployees] = useState(1);
	const [vacationDays, setVacationDays] = useState(25);

	const travelExpensesInEuros = travelExpenses / 100;
	const dailyTravelDistance = travelDistance * 2;
	const totalTravelDistance =
		dailyTravelDistance * workingDays * (52 - vacationDays / workingDays);
	const totalOfficeCosts = officeCosts * 12;

	// totalExpenses = 60km per dag * 5 dagen * 52 weken * 0.19
	const totalExpenses =
		numberEmployees * (totalTravelDistance * travelExpensesInEuros);
	const totalExpensesInclOffice = totalExpenses + totalOfficeCosts;

	// var image1 = document.getElementById('smallCar');
	// var image2 = document.getElementById('bigCar');

	function ifStatement() {
		if (totalExpensesInclOffice <= 26679) {
			return "Small car!";
		} else if (
			totalExpensesInclOffice > 26679 &&
			totalExpensesInclOffice <= 50000
		) {
			return "Big vacation!";
		} else {
			return "You can now go around the world!";
		}
	}

	return (
		<div className="App">
			<title>SAVE MONEY</title>
			<header>
				<h1>Save money, work remote</h1>
			</header>
			<main>
				<div className="sizer main-content">
					<form>
						<h2>Tell me about your business</h2>
						<div className="card">
							<div className="input-group">
								<label htmlFor="number-employees">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Number of employees:</span>
								</label>
								<input
									id="number-employees"
									min="1"
									max="1000"
									type="range"
									value={numberEmployees}
									onChange={(e) => setNumberEmployees(e.target.value)}
								/>
								<input
									className="value"
									value={numberEmployees}
									type="number"
									min="1"
									max="1000"
									onChange={(e) => setNumberEmployees(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="working-days">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Days per week your employees work:</span>
								</label>
								<input
									id="working-days"
									min="1"
									max="7"
									type="range"
									value={workingDays}
									onChange={(e) => setWorkingDays(e.target.value)}
								/>
								<input
									className="value"
									value={workingDays}
									type="number"
									min="1"
									max="7"
									onChange={(e) => setWorkingDays(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="vacation-days">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Number of vacationdays:</span>
								</label>
								<input
									id="vacation-days"
									min="0"
									max="50"
									type="range"
									value={vacationDays}
									onChange={(e) => setVacationDays(e.target.value)}
								/>
								<input
									className="value"
									value={vacationDays}
									type="number"
									min="0"
									max="50"
									onChange={(e) => setVacationDays(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="reiskosten">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Travelexpenses (in Eurocents):</span>
								</label>
								<input
									id="reiskosten"
									min="19"
									max="50"
									type="range"
									value={travelExpenses}
									onChange={(e) => setTravelExpenses(e.target.value)}
								/>
								<input
									className="value"
									value={travelExpenses}
									type="number"
									min="19"
									max="50"
									onChange={(e) => setTravelExpenses(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="travel-distance">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Traveldistance on average per employee (in km):</span>
								</label>
								<input
									id="travel-distance"
									min="1"
									max="200"
									type="range"
									value={travelDistance}
									onChange={(e) => setTravelDistance(e.target.value)}
								/>
								<input
									className="value"
									value={travelDistance}
									type="number"
									min="1"
									max="200"
									onChange={(e) => setTravelDistance(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="office-costs">
									<span role="img" aria-label="stopwatch icon"></span>{" "}
									<span>Office costs per month (in Euros):</span>
								</label>
								<input
									id="office-costs"
									min="500"
									max="100000"
									type="range"
									value={officeCosts}
									onChange={(e) => setOfficeCosts(e.target.value)}
								/>
								<input
									className="value"
									value={officeCosts}
									type="number"
									min="500"
									max="100000"
									onChange={(e) => setOfficeCosts(e.target.value)}
								/>
							</div>
						</div>
						<p></p>
						<h2>Letting your employees work from home will save you:</h2>
						<div className="card">
							<h3>You'll save in travelexpenses alone:</h3>
							<dl>
								<dt>
									{numberEmployees} employee(s) * {dailyTravelDistance} km ⨉{" "}
									{workingDays} days per week x 52 weeks x €
									{travelExpensesInEuros} =
								</dt>
								<dd>€{Math.round(totalExpenses)} per year</dd>
							</dl>
							<hr />
							<h3>And including office costs:</h3>
							<dl>
								<dt>
									{numberEmployees} employee(s) * {dailyTravelDistance} km ⨉{" "}
									{workingDays} days x €{travelExpensesInEuros} +{" "}
									{totalOfficeCosts} =
								</dt>
								<dd>€{Math.round(totalExpensesInclOffice)} per year</dd>
							</dl>
						</div>
						<p></p>

						<div className="card">
							<h3>Or to make it a bit more attractive for you as a boss:</h3>
							<div id="result">{ifStatement()}</div>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}

export default App;
