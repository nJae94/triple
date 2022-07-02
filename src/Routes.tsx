import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<div>테스트</div>} />
      </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes
