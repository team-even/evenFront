import React, { useEffect, useState } from 'react';
import { NaverMap, useNavermaps, Marker } from 'react-naver-maps';
import SimpleLocationInfo from './SimpleLocationInfo';

// 부경대학교 근처 임의의 좌표들
const randomLocations = [
    { lat: 35.1336, lng: 129.0588 }, // 예시 좌표 1
    { lat: 35.1340, lng: 129.0570 }, // 예시 좌표 2
    { lat: 35.1320, lng: 129.0560 }, // 예시 좌표 3
    { lat: 35.1345, lng: 129.0590 }, // 예시 좌표 4
    { lat: 35.1330, lng: 129.0600 }, // 예시 좌표 5
];

const MyMap = () => {
    const navermaps = useNavermaps();
    const [currentPosition, setCurrentPosition] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(15); 
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const newPosition = new navermaps.LatLng(lat, lng);
                    setCurrentPosition(newPosition);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, [navermaps]);

    useEffect(() => {
        // currentPosition이 변경될 때마다 출력
        if (currentPosition) {
            console.log(`Current Position: ${currentPosition.lat()}, ${currentPosition.lng()}`);
        }
    }, [currentPosition]);

    useEffect(() => {
        // zoomLevel이 변경될 때마다 출력
        console.log(`Zoom Level: ${zoomLevel}`);
    }, [zoomLevel]);

    const handleMapClick = (e) => {
        if (e && e.coord) {
            const newPosition = new navermaps.LatLng(e.coord.y, e.coord.x);
            setCurrentPosition(newPosition);
        }
    };

    const handleZoomChange = (zoom) => {
        setZoomLevel(zoom);
        console.log(`Zoom Level: ${zoom}`); 
    };

    const handleMarkerPress = (place) => {
      setSelectedPlace(place); // 클릭한 장소 정보 설정
    };

    return (
        <>
          <NaverMap
              center={currentPosition || new navermaps.LatLng(35.1340, 129.0580)} // 부경대 근처 기본 위치
              zoom={zoomLevel} // 현재 줌 레벨 상태로 설정
              onClick={handleMapClick}
              onZoomChanged={handleZoomChange} // 줌 레벨 변경 시 호출
              style={{ width: '100%', height: '100vh' }}
          >
              {currentPosition && (
                  <Marker
                      onClick={() => handleMarkerPress(currentPosition)}
                      position={currentPosition}
                      icon={{
                          content: `
                              <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
                                  <div style="background-color: #FF5F5F; border-radius: 8px; padding: 8px 12px; color: white; font-weight: bold; font-size: 14px; line-height: 19px; text-align: center;">
                                      현재 위치
                                  </div>
                                  <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #FF5F5F; margin-top: -2px;"></div>
                              </div>
                          `,
                          anchor: { x: 12, y: 12 },
                      }}
                      title="현재 위치"
                  />
              )}

              {randomLocations.map((location, index) => (
                  <Marker
                      onClick={() => handleMarkerPress(location)} // 각 임의 마커 클릭 핸들러
                      key={index}
                      position={new navermaps.LatLng(location.lat, location.lng)}
                      icon={{
                          content: `
                              <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
                                  <div style="background-color: #FF5F5F; border-radius: 8px; padding: 8px 12px; color: white; font-weight: bold; font-size: 14px; line-height: 19px; text-align: center;">
                                      임의의 마커 ${index + 1}
                                  </div>
                                  <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #FF5F5F; margin-top: -2px;"></div>
                              </div>
                          `,
                          anchor: { x: 12, y: 12 },
                      }}
                      title={`임의의 마커 ${index + 1}`}
                  />
              ))}
          </NaverMap>

          {selectedPlace && (
                <SimpleLocationInfo place={selectedPlace} onClose={() => setSelectedPlace(null)} />
            )}
        </>
    );
};

export default MyMap;