import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import ControlledCarousel from '../components/todo/ControlledCarousel'
import TodoList from '../components/todo/todoList.jsx'
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col >
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            
          </Row>
          <Row>
            <Col>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Agendamento"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <TodoList/>  
                }
              />
            </Col>
            
          </Row>

          <Row>
            <Col>
              <Card
                title="Controle"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
