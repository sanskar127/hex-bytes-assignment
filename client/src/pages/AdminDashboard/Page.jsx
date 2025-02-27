import DashboardContainer from "../../components/DashboardContainer"
import { Card, CardContent, Container, Typography } from '@mui/material'
import { Analytics, Chat, Schedule } from '@mui/icons-material'

const Page = () => {
  return (
    <DashboardContainer Placeholder="Admin Dashboard">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Chat sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Support Chat</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Appointment Management</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: "200px", width: "200px" }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>Reports & Analytics</Typography>
          </CardContent>
        </Card>
      </Container>
    </DashboardContainer>
  )
}

export default Page
