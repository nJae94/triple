import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom'

import Intro from 'pages/Intro'

function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Intro />} />
      </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes
