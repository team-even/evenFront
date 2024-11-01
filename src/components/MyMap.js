import React, { useEffect, useState } from 'react';
import { NaverMap, useNavermaps, Marker } from 'react-naver-maps';
import SimpleLocationInfo from './SimpleLocationInfo';

// 부경대학교 근처 임의의 좌표들
const randomLocations = [
  { lat: 35.1345, lng: 129.0595, name: "부산돼지국밥", tag: "제공" }, // 예시 좌표 1
  { lat: 35.1330, lng: 129.0580, name: "부산밀면", tag: "지참" }, // 예시 좌표 2
  { lat: 35.1325, lng: 129.0570, name: "맛있는 제과점", tag: "제공" }, // 예시 좌표 3
  { lat: 35.1338, lng: 129.0565, name: "아빠횟집", tag: "지참" }, // 예시 좌표 4
  { lat: 35.1342, lng: 129.0605, name: "엄마횟집", tag: "제공" }, // 예시 좌표 5
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
        if (currentPosition) {
            console.log(`Current Position: ${currentPosition.lat()}, ${currentPosition.lng()}`);
        }
    }, [currentPosition]);

    useEffect(() => {
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
              zoom={zoomLevel}
              onClick={handleMapClick}
              onZoomChanged={handleZoomChange}
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
                                      내 위치
                                  </div>
                                  <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #FF5F5F; margin-top: -2px;"></div>
                              </div>
                          `,
                          anchor: { x: 12, y: 12 },
                      }}
                      title="내 위치"
                  />
              )}

              {randomLocations.map((location, index) => (
                  <Marker
                      onClick={() => handleMarkerPress(location)}
                      key={index}
                      position={new navermaps.LatLng(location.lat, location.lng)}
                      icon={{
                          content: `
                              <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
                                  <div style="background-color: #FF5F5F; border-radius: 8px; padding: 8px 12px; color: white; font-weight: bold; font-size: 14px; line-height: 19px; text-align: center; width: fit-content">
                                      ${location.name}
                                  </div>
                                  <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #FF5F5F; margin-top: -2px;"></div>
                              </div>
                          `,
                          anchor: { x: 12, y: 12 },
                      }}
                      title={location.name}
                  />
              ))}
          </NaverMap>

          {selectedPlace && (
              <SimpleLocationInfo 
                  place={selectedPlace} 
                  onClose={() => setSelectedPlace(null)} 
              />
          )}
        </>
    );
};

export default MyMap;