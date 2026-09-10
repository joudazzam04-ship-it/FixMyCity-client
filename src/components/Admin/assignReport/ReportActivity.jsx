import React from "react";

function ReportActivity({
  history = [],
  notes = [],
  images = []
}) {



  function formatDate(value) {
    if (!value) return "";
    return new Date(value).toLocaleString();  //Convert a backend date into a readable date
  }


//item represents one single history record from the history array
  function historyDate(item) {
    return item.changed_at || item.created_at || null; //Use the changed_at date if available, otherwise use the created_at date. If neither is available, return null.
  }


  // Each status change becomes a group that notes and photos hang under
  const groups = [];

  history.forEach((item) => {
    groups.push({
      key: "status-" + item.id,
      status: item.status,
      date: historyDate(item),
      actor: item.changed_by_name || "",
      notes: [],
      images: []
    });
  });

// copy the group array then sort it by date, so the timeline reads from oldest to newest
  const sortedGroups = [...groups].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );


  // Find which status was active when something happened
  function findGroupIndex(date) {

    let index = -1; //haven't found a matching group yet

    if (date) { //the date that the note or photo was created is valid
        //groupo:the current status object, position: the index of the current status object in the sortedGroups array
      sortedGroups.forEach((group, position) => { //Go through every status group one by one
        if (
            //current status group has a date
          group.date &&
//converts the status group's date into a JavaScript Date object. <=converts the note/image date into a Date object.          
          new Date(group.date) <= new Date(date) //did this status happen before or at the same time as the note/image?
        ) {
          index = position;
        }
      });
    }

    // no match means the status rows have no usable date, so use the latest one
    if (index === -1) {
      index = sortedGroups.length - 1;
    }

    return index;
  }


  // Attach each note to its status
  notes.forEach((note) => {

    const index = findGroupIndex(note.created_at); 

    if (index >= 0) {
      sortedGroups[index].notes.push(note);
    }
  });


  // Attach each photo to its status
  images.forEach((image, position) => {

    const index = findGroupIndex(image.uploaded_at);

    if (index >= 0) {
      sortedGroups[index].images.push({
        key: image.id || "image-" + position,
        source: image.image_path || image
      });
    }
  });


  return (

    <section className="admin-card">

      <div className="admin-card-header">
        <h2>Report Activity</h2>
      </div>


      {sortedGroups.length === 0 ? (

        <p className="report-activity-empty">
          No activity on this report yet.
        </p>

      ) : (

        <div className="report-activity-timeline">

          {sortedGroups.map((group) => (

            <div
              className="report-activity-item activity-status"
              key={group.key}
            >

              <div className="report-activity-marker"></div>


              <div className="report-activity-content">

                <div className="report-activity-top">

                  <span className="report-activity-label">
                    Status update
                  </span>

                  <span className="report-activity-date">
                    {formatDate(group.date)}
                  </span>

                </div>


                <p className="report-activity-text">
                  Changed to <strong>{group.status}</strong>
                </p>


                {group.actor !== "" && (
                  <span className="report-activity-actor">
                    by {group.actor}
                  </span>
                )}


                {/* Notes written while this status was active */}
                {group.notes.map((note) => (

                  <div
                    className="report-activity-sub activity-note"
                    key={"note-" + note.id}
                  >

                    <div className="report-activity-sub-top">

                      <span className="report-activity-sub-label">
                        Note
                        {note.employee_name
                          ? " — " + note.employee_name
                          : ""}
                      </span>

                      <span className="report-activity-date">
                        {formatDate(note.created_at)}
                      </span>

                    </div>

                    <p className="report-activity-text">
                      {note.message}
                    </p>

                  </div>

                ))}


                {/* Photos uploaded while this status was active */}
                {group.images.length > 0 && (

                  <div className="report-activity-sub activity-image">

                    <span className="report-activity-sub-label">
                      Photos added
                    </span>

                    <div className="report-activity-images">

                      {group.images.map((image) => (

                        <img
                          key={image.key}
                          src={image.source}
                          alt="Report progress"
                          className="report-activity-image"
                        />

                      ))}

                    </div>

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default ReportActivity;