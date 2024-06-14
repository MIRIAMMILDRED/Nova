
const DashboardHeader = () => {
    return(
        <div className="flex justify-between items-center gap-6 bg-[#007BFF] pl-[20%] pr-[8%]">
          <div className="flex gap-4 items-center">
            <img src=".\public\images\admin.png" alt="admin" className="mt-4"/>
            <h3 className="font-semibold text-white">Elvin Adam</h3>
            <img src=".\public\images\chevron-down 2.png" alt="arrow-down"/>
          </div>

          <div className="flex gap-4">
            <img src=".\public\images\setting-2-icon.png" alt="setting-icon"/>
            <img src=".\public\images\message-icon.png" alt="message"/>
            <img src=".\public\images\Notification-3-icon.png" alt="notification"/>
          </div>
        
        </div>
    )
}

export default DashboardHeader