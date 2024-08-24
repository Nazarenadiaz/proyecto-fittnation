import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardC = (props) => {
  return (
    <>
      <Col sm="12" md="6" lg="4" className="my-5">
        <Card>
          <Card.Img variant="top" src={props.urlImagen} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>${props.precio}</Card.Text>
            <Card.Text>{props.descripcion}</Card.Text>
            <Card.Text>id:{props.id}</Card.Text>
            <Link
              className={"btn btn-outline-primary"}
              to={`/detalle-producto/${props.id}`}
            >
              Ver Mas
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardC;
