import { Card, CardContent, Container, Typography } from "@mui/material"
import DashboardContainer from "../../components/DashboardContainer"
import { AddCircle, Chat, Schedule } from "@mui/icons-material"

const Page = () => {
  return (
    <DashboardContainer Placeholder="Welcome User">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px", backgroundColor: "primary.main", color: "white" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <AddCircle sx={{ fontSize: 40, color: 'white' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Book Appointment</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>My Appointments</Typography>
          </CardContent>
        </Card>

        {/* <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
          <Payment sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Payment & Receipts</Typography>
          </CardContent>
          </Card> */}

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Chat sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Chat with Support</Typography>
          </CardContent>
        </Card>
      </Container>
    </DashboardContainer>
  )
}

export default Page
